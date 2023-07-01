# Webhooks Structure

## Webhook User

### Username

Overrides a webhook's username.

```json
{
  "username": "Cat",
  "content": "Message"
}
```

<!-- ![embedded username example](/assets/embeddedUsername.png) -->

### Avatar

Overrides a webhook's avatar.

```json
{
  "avatar_url": "https://example.com/image.png",
  "content": "Message"
}
```

<!-- ![embedded username example](/assets/embeddedUsername.png) -->

### Message

```json
{
  "content": "default message"
}
```

<!-- ![embedded username example](/assets/embeddedUsername.png) -->

## Embeds

Use custom embeds for message sent by webhook.
`embeds` is an array of embeds.

<!-- markdownlint-disable -->
*can contain up to 10 embeds*

### Examples

```json
{
  "embeds": [{
    "title": "Hello!",
    "description": "Hi! :grinning:"
  }]
}
```

```json
{
  "embeds": [
    {
      "title": "Meow!",
      "color": 1127128
    },
    {
      "title": "Meow-meow!",
      "color": 14177041
    }
  ]
}
```

---

## Webhook Tools

- [Discordhook](https://discohook.org)
- [Discord Webhook Sender](https://toolscord.com/webhook)

## References

- [Discord Docs Webhook Resources](https://discord.com/developers/docs/resources/webhook)
- [Discord Webhooks Guide](https://birdie0.github.io/discord-webhooks-guide) <small> by [@birdie0](https://github.com/birdie0)
- [discord.js Webhooks Guide](https://discordjs.guide/popular-topics/webhooks.html#what-is-a-webhook)
