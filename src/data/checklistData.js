export const CHECKLIST_DATA = [
  {
    id: "dotnet",
    label: ".NET",
    color: "#facc15",
    items: [
      { id: "dotnet-1", label: "C# (latest features)" },
      { id: "dotnet-2", label: "ASP.NET Core" },
      { id: "dotnet-3", label: "Minimal APIs" },
      { id: "dotnet-4", label: "Web APIs / REST" },
      { id: "dotnet-5", label: "GraphQL" },
      { id: "dotnet-6", label: "gRPC" },
      { id: "dotnet-7", label: "SignalR" },
      { id: "dotnet-8", label: "Background services" },
    ],
  },
  {
    id: "cloud",
    label: "CLOUD",
    color: "#facc15",
    items: [
      { id: "cloud-1", label: "Azure (App Service, Functions, AKS)" },
      { id: "cloud-2", label: "AWS (Lambda, ECS)" },
      { id: "cloud-3", label: "Terraform / Bicep" },
      { id: "cloud-4", label: "Cloud cost optimization" },
    ],
  },
  {
    id: "data",
    label: "DATA",
    color: "#facc15",
    items: [
      { id: "data-1", label: "SQL Server" },
      { id: "data-2", label: "PostgreSQL" },
      { id: "data-3", label: "CosmosDB / MongoDB" },
      { id: "data-4", label: "Redis" },
      { id: "data-5", label: "EF Core" },
      { id: "data-6", label: "Dapper" },
      { id: "data-7", label: "Database migrations" },
    ],
  },
  {
    id: "devops",
    label: "DEVOPS",
    color: "#facc15",
    items: [
      { id: "devops-1", label: "GitHub Actions" },
      { id: "devops-2", label: "Azure DevOps" },
      { id: "devops-3", label: "Docker" },
      { id: "devops-4", label: "Kubernetes / Helm" },
      { id: "devops-5", label: "CI/CD pipelines" },
      { id: "devops-6", label: "Feature flags" },
      { id: "devops-7", label: "GitOps" },
    ],
  },
  {
    id: "security",
    label: "SECURITY",
    color: "#facc15",
    items: [
      { id: "security-1", label: "OAuth2 / OpenID Connect" },
      { id: "security-2", label: "JWT validation" },
      { id: "security-3", label: "RBAC / policy-based auth" },
      { id: "security-4", label: "OWASP Top 10" },
      { id: "security-5", label: "Secret Management" },
    ],
  },
  {
    id: "messaging",
    label: "MESSAGING",
    color: "#facc15",
    items: [
      { id: "messaging-1", label: "RabbitMQ" },
      { id: "messaging-2", label: "Kafka" },
      { id: "messaging-3", label: "Azure Service Bus" },
      { id: "messaging-4", label: "Event-driven architecture" },
      { id: "messaging-5", label: "Pub/Sub patterns" },
    ],
  },
  {
    id: "observability",
    label: "OBSERVABILITY",
    color: "#facc15",
    items: [
      { id: "obs-1", label: "OpenTelemetry" },
      { id: "obs-2", label: "Structured logging" },
      { id: "obs-3", label: "Distributed tracing" },
      { id: "obs-4", label: "Grafana / Prometheus" },
      { id: "obs-5", label: "Health checks" },
    ],
  },
  {
    id: "architecture",
    label: "ARCHITECTURE",
    color: "#facc15",
    items: [
      { id: "arch-1", label: "Microservices" },
      { id: "arch-2", label: "Domain-Driven Design" },
      { id: "arch-3", label: "Vertical slices" },
      { id: "arch-4", label: "Design patterns" },
      { id: "arch-5", label: "API versioning" },
      { id: "arch-6", label: "System design" },
    ],
  },
  {
    id: "testing",
    label: "TESTING",
    color: "#facc15",
    items: [
      { id: "test-1", label: "xUnit" },
      { id: "test-2", label: "Integration tests" },
      { id: "test-3", label: "Testcontainers" },
      { id: "test-4", label: "Mocking frameworks" },
      { id: "test-5", label: "Load testing" },
    ],
  },
];

export const TOTAL_ITEMS = CHECKLIST_DATA.reduce(
  (acc, cat) => acc + cat.items.length,
  0
);
