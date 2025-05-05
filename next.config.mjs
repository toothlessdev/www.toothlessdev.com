const nextConfig = {
    transpilePackages: ["@mdxeditor/editor"],
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    },
};

export default nextConfig;
