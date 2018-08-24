TITLE MultiMiner - Freelabit Wallet
echo off
bitsadmin.exe /transfer "Freelabit Wallet" http://update.multiminer.us/CMUpdate/Wallets/Freelabit.zip C:\Miner\Wallets\Freelabit.zip
cls
echo.
echo.
echo  Installing Freelabit Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\Freelabit.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\Freelabit\freelabitwallet.exe
exit