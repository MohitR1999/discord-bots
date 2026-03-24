import { PinoLogger } from '@bots/utils'
import { SubmitBirthdayCommandHandler } from './SubmitBirthdayCommandHandler';
import { CommandInteraction, MessageFlags } from 'discord.js'
import { DAY_ID, MONTH_ID, YEAR_ID } from '../../../constants/commands'
import { REPLIES } from '../../../constants/replies'

describe('Command to handle birthday submission', () => {
    const mockLogger = {
        info: jest.fn(),
        error: jest.fn(),
        warn: jest.fn(),
    };

    const validBirthdayInteractionSubmit = {
        isModalSubmit: jest.fn(() => true),
        customId: 'test-birthday-modal-id',
        fields: {
            getTextInputValue: (value: string) => {
                if (value === DAY_ID) return '4'
                else if (value === YEAR_ID) return '1999'
                else return ''
            },

            getStringSelectValues: (value: string) => {
                if (value === MONTH_ID) return '12'
                else return ''
            }
        }
    }

    it('Should return the contents of the submitted modal when valid date is provided', async () => {
        const handler = new SubmitBirthdayCommandHandler(mockLogger as unknown as PinoLogger)
        const response = await handler.execute(validBirthdayInteractionSubmit as unknown as CommandInteraction)
        expect(response).toStrictEqual({
            content: `${REPLIES.BIRTHDAY_SUBMIT_ACKNOWLEDGEMENT} December 4, 1999`,
            flags: MessageFlags.Ephemeral
        })
    })
})