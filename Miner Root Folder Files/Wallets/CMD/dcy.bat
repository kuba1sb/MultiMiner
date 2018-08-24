TITLE MultiMiner - Dinastycoin Wallet
echo off
bitsadmin.exe /transfer "Dinastycoin Wallet" http://update.multiminer.us/CMUpdate/Wallets/DCY.zip C:\Miner\Wallets\DCY.zip
cls
echo.
echo.
echo  Installing Dinastycoin Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\DCY.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\DCY\dinastycoinwallet.exe
exit