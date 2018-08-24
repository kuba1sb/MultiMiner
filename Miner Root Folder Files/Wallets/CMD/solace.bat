TITLE MultiMiner - Solace Coin Wallet
echo off
bitsadmin.exe /transfer "Solace Coin Wallet" http://update.multiminer.us/CMUpdate/Wallets/Solace.zip C:\Miner\Wallets\Solace.zip
cls
echo.
echo.
echo  Installing Solace Coin Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\Solace.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\Solace\SolaceGUIWallet.exe
exit