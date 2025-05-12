import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EmailController } from './email.controller';
import { PushNotificationController } from './push-notification.controller';
import { SMSController } from './sms.controller';

@Module({
    providers: [NotificationService],
    controllers: [EmailController, PushNotificationController, SMSController]
})
export class NotificationModule { }
