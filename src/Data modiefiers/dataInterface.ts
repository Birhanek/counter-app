export interface Language {
    official:string,
    common:string
}

export interface Name {
    common:string,
    official:string,
    nativeName:{[key:string]:Language}
}
export interface Idd {
    root:string,
    suffix:string[]
}
export interface Currency{
    name:string,
    symbol:string
}
export interface Demonyms {
    f:string,
    m:string
}
export interface CarDirection {
    signs:string[],
    side:string
}

export interface PostalCode {
    format:string,
    regex:string
}

export interface CountryProps {
    country:CountryInfo,
    index:number
}

export interface  CountryState {
    countryState: CountryInfo[],
    isLoading:boolean,
    isError:boolean,
    message?:string,
    searchQuery:string,
    filtered:FilteredData[]
}
export interface FilteredData {
    countryName:string,
    countryData:number
}

export enum Filter {
    population = 'Population',
    area = 'Area',
    carDirection = 'car direction'
}
export interface FavoriteCountry{
    count:number,
    country:CountryInfo
}


interface CountryInfo {
   name:Name,
   tld:string[],
   cca2:string,
   ccn3:string,
   cca3:string,
   cioc:string,
   independent:boolean,
   status:string,
   unMember:boolean,
   currencies:{[key:string]:Currency},
   idd:Idd,
   capital:string[],
   altSpellings:string[],
   region:string,
   subregion:string,
   languages:{[key:string]:string},
   translations:{[key:string]:Language},
   latlng:number[],
   landlocked:boolean,
   borders:string[],
   area:number,
   demonyms:{[key:string]:Demonyms},
   flag:string,
   maps:{[key:string]:string},
   population:number,
   gini:{[key:string]:number},
   fifa:string,
   car:CarDirection,
   timezones:string[],
   continents:string[],
   flags:{[key:string]:string},
   coatOfArms:{[key:string]:string},
   startOfWeek:string,
   capitalInfo?:{[key:string]:number[]},
   postalCode:PostalCode,
   isFavorite:boolean
   setIsFavorite:React.Dispatch<React.SetStateAction<boolean>>
}

export default CountryInfo