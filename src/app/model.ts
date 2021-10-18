export interface datecount{
    datetime:String,
    count:number
}
export interface url{
    id?:number,
    longURL:string,
    short:string,
    count:number,
    time:Array<datecount>
}
export interface urlChart{
    name:String,
    value:number
}
