///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import "reflect-metadata";
import {plainToClass, Type} from "class-transformer";
import axios from "axios";


//-------------------------------------------------------------------------------------------------------------------//


/**
 *
 *
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class User {

    name: string

    @Type(() => Number)
    phone: number

    birth: number
    sex: number
    email: string

    getName() {

        return this.name;
    }
}


axios
    .get('http://open.duyiedu.com//api/student/findAll?appkey=92xiaodao_1581493942124')
    .then(resp => {

        // console.log(resp.data.data);

        return resp.data.data;
    })
    .then((users: User[]) => {

        // console.log(data.data);

        for (const u of users) {

            const user = plainToClass(User, u);

            // console.log(user.getName());

            console.log(typeof u.phone, u.phone);
        }
    });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
