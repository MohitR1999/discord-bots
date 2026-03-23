import { CommandInteraction, InteractionReplyOptions, LabelBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import { Command } from "../../../domain/Command";
import { PinoLogger } from '@bots/utils'

class AddBirthdayCommandHandler implements Command {
    constructor(private readonly logger: PinoLogger) {}
    
    async execute(interaction: CommandInteraction): Promise<void> {
        this.logger.info(`Executing addBirthday command`)
        const modal = new ModalBuilder().setCustomId('birthday-modal').setTitle('Set your birthday 🎂')
        const birthdayInput = new TextInputBuilder().setCustomId('demo-text').setStyle(TextInputStyle.Short).setPlaceholder('Something something...')
        const birthdayLabel = new LabelBuilder().setLabel('Please provide your birthday').setTextInputComponent(birthdayInput)
        modal.addLabelComponents(birthdayLabel)
        await interaction.showModal(modal)
    }
}

export { AddBirthdayCommandHandler }