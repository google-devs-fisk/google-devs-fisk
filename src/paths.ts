const paths = {
    home(): string {
        return "/";
    },
    projects(): string {
        return "/projects";
    },
    projectInfo(projectSlug: string): string {
        return `/projects/${projectSlug}`;
    },
    codelabs(): string {
        return "/codelabs";
    },
    codelabInfo(codelabSlug: string): string {
        return `/codelabs/${codelabSlug}`;
    },
    workCulture(): string {
        return "/workculture"
    },
    contact(): string {
        return "/contact"
    }
};

export default paths;