import { Card, CardContent } from "../ui/card";

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="border transition-shadow hover:shadow-lg">
      <CardContent className="flex items-start gap-4">
        <div className="rounded-md bg-slate-50 p-2">{icon}</div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}