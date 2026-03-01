resource "aws_secretsmanager_secret" "discord_token" {
  name = "${var.project_name}-discord-token"
  tags = local.common_tags
}
