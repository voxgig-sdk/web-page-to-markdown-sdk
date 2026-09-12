import { BaseFeature } from './feature/base/BaseFeature';
declare const FEATURE_PLUGINS: Record<string, any[]>;
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        test: {
            options: {
                active: boolean;
            };
            transport: string;
        };
    };
    options: {
        base: string;
        headers: {
            "content-type": string;
        };
        entity: {
            convert_url_to_markdown_get: {};
            convert_url_to_markdown_post: {};
        };
    };
    entity: {
        convert_url_to_markdown_get: {
            fields: never[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: ({
                                example: boolean;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                                reqd?: undefined;
                            } | {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        segments: never[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        parts: never[];
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        convert_url_to_markdown_post: {
            fields: never[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: {
                                example: boolean;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        segments: never[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        parts: never[];
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config, FEATURE_PLUGINS, };
