# Discord Timestamps

Discord timestamps can be useful for specifying a date/time across multiple users time zones. They work with the Unix Timestamp format and can be posted by regular users as well as bots and applications.[^1]

## Formatting

| Style | Input | Output |
| --- | --- | --- |
| Short Time (t) | `<t:1543392060:t>` | 09:01 |
| Long Time (T) | `<t:1543392060:T>` | 09:01:00 |
| Short Date (d) | `<t:1543392060:d>` | 28/11/2018 |
| Long Date (D) | `<t:1543392060:D>` | 28 November 2018 |
| Short Date + Time (f) | `<t:1543392060:f>` | 28 November 2018 09:01 |
| Long Date + Time (F) | `<t:1543392060:F>` | Wednesday, 28 November 2018 09:01 |
| Relative Time (R) | `<t:1543392060:R>` | 3 years ago |

*Short Data + Time is default* [^1] [^2]

---

## References

[^1] [LiviSnoot's Discord Timestamp Gist](https://gist.github.com/LeviSnoot/d9147767abeef2f770e9ddcd91eb85aa)

[^2] [Discord Developer Docs Reference](https://discord.com/developers/docs/reference)
