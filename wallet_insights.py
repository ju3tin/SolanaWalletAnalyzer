import openai

openai.api_key = "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"

def generate_wallet_insights(wallet_data):
    prompt = f"""
    Analyze the following wallet data:
    {wallet_data}

    Categorize the wallet holder into types like "NFT Collector", "Meme Token Trader", or "DeFi Enthusiast".
    """
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=200,
    )
    return response.choices[0].text.strip()

# Example Wallet Data
example_wallet_data = """
SOL Balance: 12.5
Tokens: $BONK (Balance: 1,200,000), $SEND (Balance: 500)
NFTs: Degenerate Ape Academy, SolPunks, Galactic Gecko
Transactions: Regular trading on Orca, frequent small swaps of $BONK
"""

# Generate Insights
insights = generate_wallet_insights(example_wallet_data)
print(insights)