#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

RUN apt-get install -f

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y libpng-dev libjpeg-dev curl libxi6 build-essential libgl1-mesa-glx
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

WORKDIR /src

COPY ["CourseProject/CourseProject.csproj", "CourseProject/"]


RUN dotnet restore "CourseProject/CourseProject.csproj"
COPY . .
WORKDIR "/src/CourseProject"
RUN dotnet build "CourseProject.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CourseProject.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
#ENTRYPOINT  ["dotnet", "CourseProject.dll"]
#CMD ["dotnet", "CourseProject.dll"]

CMD ASPNETCORE_URLS=http://*:$PORT dotnet CourseProject.dll