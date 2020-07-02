### To run in developer mode:

npm run start:dev

### API ENDPOINTS:

#### {{URL}}/api/users:

##### @Get():

[{
id: number;
name: string;
gender: string;
phone: number;
email: string;
address: string;
nationality: string;
dob: Date;
edBackground: string;
modeOfContact: number;
}]

##### @Post(userData):

{
id: number;
name: string;
gender: string;
phone: number;
email: string;
address: string;
nationality: string;
dob: Date;
edBackground: string;
modeOfContact: number;
}

#### {{URL}}/api/users/[userId]

##### @Get():

{
id: number;
name: string;
gender: string;
phone: number;
email: string;
address: string;
nationality: string;
dob: Date;
edBackground: string;
modeOfContact: number;
}

### Libraries Used:

#### csvtosjson

For converting the data in .csv file into json Object.
