//七大中心后台站点
class DefalutSiteConfig
{
    Name:string;

    DisplayName:string;

    ConfigName:string;

    ExecuteName:string;
};

let DefaultSiteConfigs: DefalutSiteConfig[] = [];
{
DefaultSiteConfigs.push({
    Name: "AuthApi",
    DisplayName: "认证中心后台",
    ConfigName: "DySoft.Users.Host.exe.config",
    ExecuteName: "DySoft.Users.Host.exe"
});
DefaultSiteConfigs.push({
    Name: "OpenPlatformApi",
    DisplayName: "开发者门户",
    ConfigName: "DySoft.Users.Host.exe.config",
    ExecuteName: "DySoft.Users.Host.exe"
});
DefaultSiteConfigs.push({
    Name: "BasicManageApi",
    DisplayName: "用户中心",
    ConfigName: "DySoft.Users.Host.exe.config",
    ExecuteName: "DySoft.Users.Host.exe"
});
DefaultSiteConfigs.push({
    Name: "PowerManageApi",
    DisplayName: "权限中心",
    ConfigName: "DySoft.Users.Host.exe.config",
    ExecuteName: "DySoft.Users.Host.exe"
});

DefaultSiteConfigs.push({
    Name: "SystemManageApi",
    DisplayName: "配置中心",
    ConfigName: "DySoft.Users.Host.exe.config",
    ExecuteName: "DySoft.Users.Host.exe"
});

DefaultSiteConfigs.push({
    Name: "InterfaceApi",
    DisplayName: "接口中心",
    ConfigName: "DySoft.Interface.Host.exe.config",
    ExecuteName: "DySoft.Interface.Host.exe"
});
DefaultSiteConfigs.push({
    Name: "DatacenterApi",
    DisplayName: "数据中心",
    ConfigName: "DySoft.DataCenter.Host.exe.config",
    ExecuteName: "DySoft.DataCenter.Host.exe"
});
DefaultSiteConfigs.push({
    Name: " LoggingApi",
    DisplayName: "日志中心",
    ConfigName: "",
    ExecuteName: ""
});
DefaultSiteConfigs.push({
    Name: "MessageApi",
    DisplayName: "消息中心",
    ConfigName: "",
    ExecuteName: ""
});
}

export { DefaultSiteConfigs };