/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "localhost" },
			{ hostname: "upload.wikimedia.org" },
			{ hostname: "i0.wp.com" },
			{ hostname: "encrypted-tbn0.gstatic.com" },
			{ hostname: "randomuser.me" },
		],
	},
};

export default nextConfig;
