resource "aws_secretsmanager_secret" "discord_token" {
  name = "${var.project_name}-discord-token"
  tags = local.common_tags
}

resource "aws_secretsmanager_secret" "app_id" {
  name = "${var.project_name}-app-id"
  tags = local.common_tags
}
