TITLE MultiMiner - Monero Wallet
echo off
bitsadmin.exe /transfer "Monero Wallet" http://update.multiminer.us/CMUpdate/Wallets/XMR.zip C:\Miner\Wallets\XMR.zip
cls
echo.
echo.
echo  Installing Monero Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\XMR.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\XMR\monero-wallet-gui.exe
exit