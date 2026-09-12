import { ConvertUrlToMarkdownGetEntity } from './entity/ConvertUrlToMarkdownGetEntity';
import { ConvertUrlToMarkdownPostEntity } from './entity/ConvertUrlToMarkdownPostEntity';
export type * from './WebPageToMarkdownTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WebPageToMarkdownEntityBase } from './WebPageToMarkdownEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class WebPageToMarkdownSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    ConvertUrlToMarkdownGet(entopts?: Record<string, any>): ConvertUrlToMarkdownGetEntity;
    ConvertUrlToMarkdownPost(entopts?: Record<string, any>): ConvertUrlToMarkdownPostEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): WebPageToMarkdownSDK;
    tester(testopts?: any, sdkopts?: any): WebPageToMarkdownSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof WebPageToMarkdownSDK;
export { stdutil, config, BaseFeature, WebPageToMarkdownEntityBase, WebPageToMarkdownSDK, SDK, };
