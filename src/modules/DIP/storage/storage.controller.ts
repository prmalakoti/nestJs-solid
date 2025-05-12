import { Controller, Get, Param } from '@nestjs/common';
import { StorageFetcher, StorageService } from './storage.service';

@Controller('/storage')
export class StorageController {
    constructor(private storageService: StorageFetcher) { }

    //Bad ❌
    // @Get('/file/:filename')
    // public badGetFile(@Param('filename') filename: string) {
    //   return this.storageService.findAmazonS3File(filename);
    // }

    //Good ✅
    @Get('/file/:filename')
    public getFile(@Param('filename') filename: string) {
        console.log("file name ", filename);
        return this.storageService.findFile(filename);
    }
}