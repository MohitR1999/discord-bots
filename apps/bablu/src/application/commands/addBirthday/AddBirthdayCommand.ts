import { SlashCommandBuilder } from 'discord.js'
import { SlashCommandDefinition } from '../../../domain/SlashCommandDefinition'
import { COMMANDS } from '../../../constants/commands'

export class AddBirthdayCommand implements SlashCommandDefinition {
    name = COMMANDS.ADD_BIRTHDAY
    description = "Allows you to set your birthday in the server"
    build(): SlashCommandBuilder {
        return new SlashCommandBuilder().setName(this.name).setDescription(this.description)
    }
}