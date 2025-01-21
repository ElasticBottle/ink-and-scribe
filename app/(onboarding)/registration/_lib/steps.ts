export type RegistrationStep = "1" | "2" | "3";

export function getLastCompletedStep(): RegistrationStep {
  const businessInfo = localStorage.getItem("businessInfo");
  const trademarkOwner = localStorage.getItem("trademarkOwner");

  if (trademarkOwner) return "2";
  if (businessInfo) return "1";
  return "1";
}

export function isStepAccessible(step: RegistrationStep): boolean {
  const lastCompletedStep = getLastCompletedStep();
  return Number(step) <= Number(lastCompletedStep) + 1;
}

export function redirectToLastStep(): RegistrationStep {
  const lastCompletedStep = getLastCompletedStep();
  const nextStep = String(Number(lastCompletedStep) + 1) as RegistrationStep;
  return nextStep;
}
