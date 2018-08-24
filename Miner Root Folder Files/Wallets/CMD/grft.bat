TITLE MultiMiner - Graft Wallet
echo off
bitsadmin.exe /transfer "Graft Wallet" http://update.multiminer.us/CMUpdate/Wallets/Grft.zip C:\Miner\Wallets\Grft.zip
cls
echo.
echo.
echo  Installing Graft Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\Grft.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\Grft\GraftWallet.exe
exit