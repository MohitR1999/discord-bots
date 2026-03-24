import { PinoLogger } from '@bots/utils'
import { SubmitBirthdayCommandHandler } from './SubmitBirthdayCommandHandler';
import { CommandInteraction } from 'discord.js'

describe('Command to handle birthday submission', () => {
    const mockLogger = {
        info: jest.fn(),
        error: jest.fn(),
        warn: jest.fn(),
    };

    const mockBirthdaySubmitHandler = {
        isModalSubmit: jest.fn(() => true),
        customId: 'test-birthday-modal-id',
        fields: {
            getTextInputValue: (value: string) => {
                if (value === 'day-select') return '4'
                else if (value === 'year-select') return '1999'
                else return ''
            },

            getStringSelectValues: (value: string) => {
                if (value === 'month-select') return '12'
            }
        }
    }

    it('Should return the contents of the submitted modal', async () => {
        const handler = new SubmitBirthdayCommandHandler(mockLogger as unknown as PinoLogger)
        await handler.execute(mockBirthdaySubmitHandler as unknown as CommandInteraction)
    })
})