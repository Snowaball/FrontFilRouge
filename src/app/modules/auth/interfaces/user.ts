export class UserInterface {
  constructor(
    public id?: number,
    public civilite?: string,
    public nom?: string,
    public prenom?: string,
    public email?:string,
    public mdp?: string,    
    public adresse?: AdresseIterface,
    public role?: string,
    public token?:string
  ){}
  
}

export interface AdresseIterface {
  numeroVoie?: string,
  voie?: string,
  complement?: string,
  codePostal?: string,
  ville :string,
  region?: string,
  departement?: string,
}

export interface LoginInterface {
  email: string,
  password: string,
}
