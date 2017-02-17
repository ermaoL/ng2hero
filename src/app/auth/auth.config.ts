export interface IAuthConfig {
    globalHeaders?: Array<Object>;
    headerName?: string;
    headerPrefix?: string;
    noJwtError?: boolean;
    noTokenScheme?: boolean;
    guards?: {
        loggedInGuard: {
            redirectUrl: string;
        },
        loggedOutGuard: {
            redirectUrl: string;
        }
    }
}

const AuthConfigDefaults: IAuthConfig = {
    globalHeaders: [],
    headerName: 'Authorization',
    headerPrefix: '',
    noJwtError: false,
    noTokenScheme: false,
    guards: {
        loggedInGuard: {
            redirectUrl: 'dashboard'
        },
        loggedOutGuard: {
            redirectUrl: 'login'
        }
    }
};


export class AuthConfig{
    private _config: IAuthConfig;
    
    constructor(config?: IAuthConfig){
        config = config || {};
        console.log(config);
        this._config = Object.assign({}, AuthConfigDefaults, config);
        
        console.log(this._config);
        if(this._config.headerPrefix) {
            console.log('-1312')
            this._config.headerPrefix = config.headerPrefix;
        } else if (this._config.noTokenScheme) {
            this._config.headerPrefix = '';
        } else {
            this._config.headerPrefix = 'Bearer ';
        }
        
    }

    public getConfig(): IAuthConfig {
        return this._config;
    }
}