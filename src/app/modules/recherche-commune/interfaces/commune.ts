export class Commune {
    constructor(
        public id:number,
        public libelle:string,
        public latitude:string,
        public longitude:string,
        public departement?:Departement,
        public region?:Region,
    ){}    
}

export class Departement {
    constructor(
        public id:number,
        public libelle:string,
        public region?:Region,
    ){}
}

export class Region {
    constructor(
        public id:number,
        public libelle:string,  
    ){}
}
