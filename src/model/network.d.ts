declare module 'network'{
    interface Network{
        name:string,
        links:NetworkLink[],
        nodes:NetworkNode[]
    }
    interface NetworkLink{
        name:string
        from:string;
        to:string;
        label?:string
    }
    interface NetworkNode{
        name:string,
        description?:string,
        detailedDescription?:string,
        ipAddress?:string
    }
}