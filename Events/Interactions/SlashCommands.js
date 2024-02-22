const { ChatInputCommandInteraction } = require("discord.js");
const config = require("../../config.json");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: "This command is outdated.",
        ephemeral: true,
      });

    if (command.developer && interaction.user.id !== config.owner_id)
      return interaction.reply({
        content: "This command is only available to the Bot Owner.",
        ephemeral: true,
      });

    command.execute(interaction, client);
  },
};
