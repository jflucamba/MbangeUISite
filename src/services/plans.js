import {http} from './config'

export default{

    listAll: () => {
        return http.get()
    },

    salvar: (plano) => {
        return http.post(plano)
    }

}