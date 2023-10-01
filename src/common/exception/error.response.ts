/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

// Error response for bad request
export class ErrorBaseResponse {
  @ApiProperty()
  public message: string;

  @ApiProperty()
  public code: number;

  @ApiProperty()
  public reqId: string;
}

// Error base for errorhandler
export class ErrorBase {
	constructor(public message: string, public coderror: number, public internalmessage?: string, public statusresponse?: number) {}
}

//  Custom errors implementation
export enum errorMessageInternalServer {
	"Data retrieve failed" = 1001,
}
  
export enum errorMessageInvalidInfo {
    "Not Found" = 2001,
    "Invalid Info" = 2002,
    "Validation Info Error" = 2003,
    "Function not implemented." = 2004,
    "No available information" = 2005,
    "Invalid Parameter" = 2006,
    "User does not exists" = 2007,
    "number of page invalid." = 2008,
    "User not found." = 2009,
    "Invalid email" = 2100,
    "Invalid password" = 2101,
    "Message not found" = 2102,
    "Comment deleted" = 2103,
}
  
export enum errorMessageInvalidAccess {
	"User without permissions." = 3001,
	"Unauthorized" = 3002,
	"Invalid Header" = 3003,
	"No Available Information" = 3004,
	"User without permissions: Is not UserAdmin" = 3101,
}
  