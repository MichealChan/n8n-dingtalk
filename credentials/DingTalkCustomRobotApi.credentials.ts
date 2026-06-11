import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class DingTalkCustomRobotApi implements ICredentialType {
	name = 'dingTalkCustomRobotApiNew';
	displayName = 'DingTalkCustomRobot API';
	// documentationUrl = '';
	properties: INodeProperties[] = [
		{
			displayName: 'WebhookUrl',
			name: 'webhookUrl',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'WebhookSign',
			name: 'webhookSign',
			type: 'string',
			default: null,
		},
	];
}
