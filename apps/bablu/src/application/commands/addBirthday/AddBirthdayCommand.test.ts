import { PinoLogger } from '@bots/utils'
import { AddBirthdayCommandHandler } from './AddBirthdayCommandHandler'
import { CommandInteraction } from 'discord.js';

describe('addBirthday command', () => {
    const mockLogger = {
        info: jest.fn(),
        error: jest.fn(),
        warn: jest.fn(),
    };

    const mockBirthdayInteraction = {
        showModal: jest.fn()
    }

    it('Should render a modal when user runs /addbirthday', async () => {
        const handler = new AddBirthdayCommandHandler(mockLogger as unknown as PinoLogger);
        await handler.execute(mockBirthdayInteraction as unknown as CommandInteraction)
        expect(mockBirthdayInteraction.showModal).toHaveBeenCalled()
    })
})