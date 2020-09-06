/// Message prefix containing a name (servername or nickname) and optional
/// user and host. If the user and host are set the name is semantically
/// seen as the nickname.
#[derive(Debug, Clone, Copy, Eq, Ord, PartialOrd, PartialEq, Hash, Default)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct Prefix<'a> {
    raw: &'a str
}

impl<'a> ToString for Prefix<'a> {
    fn to_string(&self) -> String {
        self.raw.to_string()
    }
}

impl<'a> Prefix<'a> {
    /// Create a new Prefix from the given string. Expects the string to be a valid prefix string.
    pub fn new(raw: &'a str) -> Prefix<'a> {
        Prefix {
            raw
        }
    }

    // Returns the (server- or nick-) name.
    pub fn name(&self) -> &'a str {
        let end = self.raw.find('!')
            .or_else(|| self.raw.find('@'))
            .or_else(|| self.raw.find(' '))
            .unwrap_or_else(|| self.raw.len());
        &self.raw[..end]
    }

    // Returns the host if present.
    pub fn host(&self) -> Option<&'a str> {
        self.raw.find('@').map(|index| &self.raw[index + 1..])
    }

    // Returns the host if present.
    pub fn user(&self) -> Option<&'a str> {
        self.raw.find('!')
            .and_then(|start| {
                let end = self.raw.find('@')
                    .unwrap_or_else(|| self.raw.len());
                Some(&self.raw[start + 1..end])
            })
    }
}
