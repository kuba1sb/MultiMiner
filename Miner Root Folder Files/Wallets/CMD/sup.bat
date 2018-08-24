TITLE MultiMiner - Superior Coin Wallet
echo off
bitsadmin.exe /transfer "Superior Coin Wallet" http://update.multiminer.us/CMUpdate/Wallets/SUP.zip C:\Miner\Wallets\SUP.zip
cls
echo.
echo.
echo  Installing Superior Coin Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\SUP.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\SUP\Superior-wallet-gui.exe
exit