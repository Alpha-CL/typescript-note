///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {classDescriptor, propDescriptor, printObj} from "./Descriptor";


@classDescriptor('alpha')
class PrintUserDes {

    @propDescriptor('account')
    loginId: string;

    @propDescriptor('password')
    loginPwd: string;
}

const printUserDes = new PrintUserDes();

printUserDes.loginId = '9527';
printUserDes.loginPwd = 'login123';

printObj(printUserDes);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////