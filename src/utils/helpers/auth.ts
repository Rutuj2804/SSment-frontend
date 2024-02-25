import { UserInterface } from "../types"

export const userToken = () => localStorage.getItem("ssment-frag-granade")

export const username = (user: UserInterface) => {
    var name = ""

    if(user.firstname) name += user.firstname

    if(user.midname) {
        if(name) name +=" "
        name += user.midname
    }

    if(user.lastname) {
        if(name) name +=" "
        name += user.lastname
    }

    return name
}

export const location = (user: UserInterface) => {
    var place = ""

    if(user.state) place += user.state

    if(user.country) {
        if(place) place +=", "
        place += user.country
    }

    return place
}