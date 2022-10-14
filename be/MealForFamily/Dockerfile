FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

COPY *.csproj ./
RUN dotnet restore MealForFamily.csproj

COPY . ./
RUN dotnet publish MealForFamily.csproj -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime

WORKDIR /app

COPY --from=build /app/out .

ENTRYPOINT ["dotnet", "MealForFamily.dll"]`