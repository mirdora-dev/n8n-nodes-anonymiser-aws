import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class AnonymiserAWS implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Anonymiser AWS',
        name: 'anonymiserAWS',
        icon: 'file:anonymiseraws.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={$parameter["operation"]}',
        description: 'Perform anonymiser aws operations in n8n',
        defaults: {
            name: 'Anonymiser AWS',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'anonymiserAWSApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Execute',
                        value: 'execute',
                        description: 'Execute the anonymisation action',
                        action: 'Execute action',
                    },
                ],
                default: 'execute',
            },
        ],
    };
}
