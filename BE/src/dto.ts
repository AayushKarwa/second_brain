import jwt, { JwtPayload } from 'jsonwebtoken'

export interface decodedToken extends JwtPayload{
    id:string
}

export type decode = decodedToken

export const contentTypes = ['Image','Video','Post','Thread']