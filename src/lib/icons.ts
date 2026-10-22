import {
  Baby, BadgeCheck, BarChart3, Bell, BookOpen, Briefcase, Building2, CalendarDays, CircleHelp, Compass,
  Download, FileText, Flower2, Gem, GraduationCap, HandCoins, HandHeart, Heart, HeartHandshake, Landmark,
  LifeBuoy, ListChecks, MessagesSquare, Newspaper, PieChart, PiggyBank, Presentation, Quote, Rocket, Scale,
  ShieldCheck, UserPlus, UserRound, Users, Lightbulb, Flame, CheckCircle2, Sprout, Target,
  type LucideIcon,
} from 'lucide-react'

/** Explicit imports keep the bundle small (tree-shaking friendly). */
export const iconMap: Record<string, LucideIcon> = {
  Baby, BadgeCheck, BarChart3, Bell, BookOpen, Briefcase, Building2, CalendarDays, CircleHelp, Compass,
  Download, FileText, Flower2, Gem, GraduationCap, HandCoins, HandHeart, Heart, HeartHandshake, Landmark,
  LifeBuoy, ListChecks, MessagesSquare, Newspaper, PieChart, PiggyBank, Presentation, Quote, Rocket, Scale,
  ShieldCheck, UserPlus, UserRound, Users, Lightbulb, Flame, CheckCircle2, Sprout, Target,
}

export const getIcon = (name: string): LucideIcon => iconMap[name] ?? Sprout
