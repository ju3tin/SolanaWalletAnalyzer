use anchor_lang::prelude::*;

declare_id!("E7snTwCf4eirZprCBPLEJbMGnZYXAuN4kmz3DBThSBfR"); // Replace with your program's ID

#[program]
pub mod hello_world_solana {
    use super::*;

    pub fn say_hello(ctx: Context<SayHello>) -> Result<()> {
        msg!("Hello, World! This is a message from Solana.");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct SayHello {}