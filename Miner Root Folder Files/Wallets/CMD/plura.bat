TITLE MultiMiner - PluraCoin Wallet
echo off
bitsadmin.exe /transfer "PluraCoin Wallet" http://update.multiminer.us/CMUpdate/Wallets/Plura.zip C:\Miner\Wallets\Plura.zip
cls
echo.
echo.
echo  Installing PluraCoin Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\Plura.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\Plura\PluraCoin.exe
exit