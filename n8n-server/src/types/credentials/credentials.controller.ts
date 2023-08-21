import { Controller, Get, Query } from '@nestjs/common';

@Controller('credentials')
export class CredentialsController {
    @Get('')
    async getCredentialsType(@Query('name') name: string): Promise<any> {
        return 'credentials';
    }

    @Get('type')
    async getCredentialType(@Query('id') name: string): Promise<any> {
        return 'credentials';
    }
}
