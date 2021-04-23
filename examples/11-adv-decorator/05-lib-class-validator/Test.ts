///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import "reflect-metadata";
import {IsNotEmpty, MaxLength, MinLength, validate} from "class-validator";


//-------------------------------------------------------------------------------------------------------------------//


class RegUser {

    @IsNotEmpty({message: 'must be enter loginId'})
    @MinLength(5, {message: 'loginId length must be more than 5'})
    @MaxLength(15, {message: 'loginId length must be less than 15'})
    loginId: string;

    loginPwd: string

    @MinLength(0)
    @MaxLength(100)
    age: number;
    gender: 'male' | 'female'
}

const post = new RegUser();

validate(post)
    .then(errs => {
        console.log(errs);
    });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////