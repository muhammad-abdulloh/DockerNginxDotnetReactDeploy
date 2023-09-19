#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 83
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["DeployTest/DeployTest.csproj", "DeployTest/"]
RUN dotnet restore "DeployTest/DeployTest.csproj"
COPY . .
WORKDIR "/src/DeployTest"
RUN dotnet build "DeployTest.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DeployTest.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DeployTest.dll"]