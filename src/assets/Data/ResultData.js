import GapsAfter1 from "../GapsAfter1.png";
import GapsBefore1 from "../GapsBefore1.png";
import CrookedBefore from "../CrookedBefore.png";
import CrookedAfter from "../CrookedAfter.png";
import ProtrudingBefore from "../Protrudingbefore.png";
import ProtrudingAfter from "../ProtrudingAfter.png";
import OverBiteBefore from "../OverbiteBefore.png";
import OverBiteAfter from "../OverbiteAfter.png";
import price from "../Price.svg";
import Frame from "../Frame.svg";
import Predictable from "../Predictable.svg";
import Frame53 from "../Frame53.png";
import Frame54 from "../Frame54.png";
import choose3 from "../choose3.png";
import choose4 from "../choose4.png";

export const resultsData = [
  {
    id: 1,
    beforeImage: GapsBefore1,
    afterImage: GapsAfter1,
    concern: "Gaps",
    duration: "8 months",
  },
  {
    id: 2,
    beforeImage: CrookedBefore,
    afterImage: CrookedAfter,
    concern: "Crooked Teeth",
    duration: "8 months",
  },
  {
    id: 3,
    beforeImage: OverBiteBefore,
    afterImage: OverBiteAfter,
    concern: "Open Bite",
    duration: "8 months",
  },
  {
    id: 4,
    beforeImage: ProtrudingBefore,
    afterImage: ProtrudingAfter,
    concern: "Protruding Teeth",
    duration: "8 months",
  },
];

export const features = [
  {
    id: 1,
    title: "Custom-made & invisible",
    description:
      "Tailored for your teeth and smile with a clear, discreet appearance.",
    image: Frame53,
    bgColor: "bg-primary",
    decorativePosition: "left-100",
  },
  {
    id: 2,
    title: "Predictable results",
    description: "Advanced 3D modeling and AI-technology for precise planning.",
    image: Frame54,
    bgColor: "bg-primary",
    decorativePosition: "right-56",
  },
  {
    id: 3,
    title: "Expert Orthodontists",
    description: "Highly experienced dental professionals.",
    image: choose3,
    bgColor: "bg-primary",
    decorativePosition: "left-71",
  },
  {
    id: 4,
    title: "Unlimited Aligners",
    description: "No extra cost for aligners and consultations.",
    image: choose4,
    bgColor: "bg-neutral",
    decorativePosition: "left-40",
  },
];

export const faqs = [
  {
    question: "What are Aligners?",
    answer:
      "Aligners are transparent trays used to straighten teeth gradually without using traditional metal braces.",
  },
  {
    question: "How do Aligners work?",
    answer:
      "Aligners apply gentle pressure to move your teeth step by step into the desired position over time.",
  },
  {
    question: "Can any dentist do irregular teeth treatment?",
    answer:
      "No, treatment should be done by a certified orthodontist who specializes in teeth alignment.",
  },
  {
    question: "Are there any restrictions on eating or drinking?",
    answer:
      "You should remove aligners while eating or drinking anything except water to avoid damage or staining.",
  },
  {
    question: "How long does the treatment take?",
    answer:
      "Treatment duration depends on the case but usually ranges from 6 to 12 months.",
  },
];
//  export const rows = [
//    {
//      feature: "Easy to complex cases",
//      whistle: { type: "text", value: "Yes, mild to\ncomplex" },
//      other: { type: "text", value: "No, only mild to\nmoderate" },
//      expand:
//        "Whistle Aligners has transparent pricing and does not include any hidden costs. All expenses, including consultations and scans, are incorporated into a single fee, offering patients a hassle-free and clear financial experience.",
//    },
//    {
//      feature: "Clear-cut Pricing",
//      whistle: { type: "icon", url: CHECK_GREEN3_URL },
//      other: { type: "icon", url: CROSS_RED1_URL },
//      expand:
//        "Whistle Aligners has transparent pricing and does not include any hidden costs. All expenses, including consultations and scans, are incorporated into a single fee, offering patients a hassle-free and clear financial experience.",
//    },
//    {
//      feature: "Aligner Change",
//      whistle: { type: "text", value: "Every 10 days" },
//      other: { type: "text", value: "Every 2 weeks" },
//      expand:
//        "Whistle Aligners has transparent pricing and does not include any hidden costs. All expenses, including consultations and scans, are incorporated into a single fee, offering patients a hassle-free and clear financial experience.",
//    },
//    {
//      feature: "Clinical Partnership",
//      whistle: { type: "icon", url: CHECK_GREEN2_URL },
//      other: { type: "icon", url: CROSS_RED2_URL },
//      expand:
//        "Whistle Aligners has transparent pricing and does not include any hidden costs. All expenses, including consultations and scans, are incorporated into a single fee, offering patients a hassle-free and clear financial experience.",
//    },
//    {
//      feature: "Movement Between Cities",
//      whistle: { type: "icon", url: CHECK_GREEN_URL },
//      other: { type: "icon", url: CROSS_RED3_URL },
//      expand:
//        "Whistle Aligners has transparent pricing and does not include any hidden costs. All expenses, including consultations and scans, are incorporated into a single fee, offering patients a hassle-free and clear financial experience.",
//    },
//    {
//      feature: "Complimentary Teeth Scaling",
//      whistle: { type: "icon", url: CHECK_GREEN4_URL },
//      other: { type: "icon", url: CROSS_RED4_URL },
//      expand:
//        "Whistle Aligners has transparent pricing and does not include any hidden costs. All expenses, including consultations and scans, are incorporated into a single fee, offering patients a hassle-free and clear financial experience.",
//    },
//  ];

export const STEPS = [
  {
    num: 1,
    title: "Scan",
    desc: "We use an AI-powered scanner to take a detailed 3D image of your teeth.",
  },
  {
    num: 2,
    title: "Plan",
    desc: "Our Orthodontists design your customized smile enhancement plan using highly advanced software.",
  },
  {
    num: 3,
    title: "Fabricate",
    desc: "We manufacture your custom aligners leveraging 3D printing & laser technology.",
  },
  {
    num: 4,
    title: "Wear",
    desc: "Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey.",
  },
];

export const feature = [
  {
    icon: Frame,
    title: "Next-Gen",
    desc: "Crafted with top-notch 3D printing, laser tech, and Zendura FLX material.",
  },
  {
    icon: Predictable,

    title: "Hassle-Free",
    desc: "Predictable, comfortable & lifestyle-friendly for an easy smile transformation.",
  },
  {
    icon: price,
    title: "Transparent Pricing",
    desc: "Predictable, comfortable & lifestyle-friendly for an easy smile transformation.",
  },
];
